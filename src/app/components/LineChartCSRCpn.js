'use client'
import {
    Button,
    Center,
    Container,
    Flex, Grid,
    GridItem, IconButton,
    Input,
    InputGroup, InputLeftElement,
    Select,
    Stack, Text
} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {AddIcon, CheckIcon, DownloadIcon, MinusIcon, PlusSquareIcon, SearchIcon} from "@chakra-ui/icons";
import {saveAs} from 'file-saver';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const plugins = [
    {
        beforeDraw: (chart, args, options) => {
            const {ctx} = chart;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || '#ffff';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    }
]
const LineChartCSRCpn = () => {
    const [nameOfChart,setNameOfChart]=useState()
    const [nameOfValue,setNameOfValue]=useState()
    const [data, setData] = useState([{x: "Monday", y: 1}, {x: "Tuesday", y: 5}, {x: "Wednesday", y: 3}]);
    const [options, setOptions] = useState(
        {
            responsive: true,
            layout: {
                padding: 30
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: "Name of chart",
                },
            },
        }
    )
    const listRef = useRef(null);

    const [chart, setChart] = useState({
        labels: data.map(e => e.x),
        datasets: [{
            label: 'Name of value',
            data: data.map(e => e.y),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }],
    })
    const handleNameOfChart=(value)=>{
        setNameOfChart(value.currentTarget.value)
    }
    const handleNameOfValue=(value)=>{
        setNameOfValue(value.currentTarget.value)
    }

    const addValue = () => {
        setData([...data, {x: "", y: ""}]);
    }
    const removeValue = (index) => {
        let array = [...data];
        array.splice(index, 1)
        setData(array);
    }
    const handleX = (index, value) => {
        if (index >= 0 && index < data.length) {
            setData([
                ...data.slice(0, index),
                {...data[index], x: value.currentTarget.value},
                ...data.slice(index + 1),
            ]);
        }
    }
    const handleY = (index, value) => {
        console.log(value.currentTarget.value)
        if (index >= 0 && index < data.length) {
            setData([
                ...data.slice(0, index),
                {...data[index], y: value.currentTarget.value},
                ...data.slice(index + 1),
            ]);
        }
    }
    const createChart = () => {
        setOptions({ // Update options state with new title
            ...options,
            plugins: {
                ...options.plugins,
                title: {
                    ...options.plugins.title,
                    text: nameOfChart,
                },
            },
        });
        let labels = data.map(e => e.x);
        let chartData = data.map(e => e.y);
        setChart({
            labels: labels,
            datasets: [{
                label: nameOfValue,
                data: chartData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }],
        })
    }
    const saveCanvas = () => {
        //save to png
        const canvasSave = document.getElementById('chart');
        canvasSave.toBlob(function (blob) {
            saveAs(blob, "testing.jpg")
        })
    }
    useEffect(() => {
        // Check for listRef availability to prevent errors
        if (listRef.current) {
            const listElement = listRef.current;
            listElement.scrollTop = listElement.scrollHeight; // Scroll smoothly
        }
    }, [data]);
    return (
        <>
            <Grid
                h='100%'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={3}>
                    <Center style={{padding: 20}}>

                        <Line id="chart"
                              style={{background: "#ffff"}}
                              options={options}
                              data={chart}
                              plugins={plugins}

                        />


                    </Center>
                    <Center>
                        <Button leftIcon={<DownloadIcon/>} onClick={() => saveCanvas()}>Dowload</Button>
                    </Center>
                </GridItem>
                <GridItem rowSpan={2} colSpan={2}>
                    <Container style={{marginTop: 10}}>
                        <Stack spacing={4}>
                            <InputGroup>

                                <Input onChange={value => handleNameOfChart(value)}
                                      placeholder="Name of chart" />
                            </InputGroup>
                            <InputGroup>

                                <Input onChange={value => handleNameOfValue(value)}
                                       placeholder="Name of value" />
                            </InputGroup>
                            <div  ref={listRef} style={{maxHeight:300,overflowY:"scroll",flexDirection:"column-reverse"}}>
                                {
                                    data?.map((e, index) => {
                                        return (
                                            <Flex key={index}>
                                                <div style={{padding: 5}}>
                                                    <Text>{index+1}</Text>
                                                </div>
                                                <div style={{padding: 5}}>
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <Text fontSize={10} fontWeight={'bold'}>Label</Text>
                                                        </InputLeftElement>
                                                        <Input onChange={value => handleX(index, value)}
                                                               placeholder={e.x}/>
                                                    </InputGroup>
                                                </div>
                                                <div style={{padding: 5}}>
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <Text fontSize={10} fontWeight={'bold'}>Value</Text>
                                                        </InputLeftElement>
                                                        <Input
                                                            placeholder={e.y}
                                                            type='number'
                                                            onChange={value => handleY(index, value)}
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div style={{padding: 5}}>
                                                    <IconButton

                                                        colorScheme='blue'
                                                        variant='outline'
                                                        fontSize='10px'
                                                        aria-label='Remove value'
                                                        icon={<MinusIcon/>}
                                                        onClick={value => removeValue(index)}/>
                                                </div>

                                            </Flex>)
                                    })
                                }
                            </div>

                            <Flex>
                                <Button w='50%' margin={1}
                                        leftIcon={<AddIcon/>}
                                        colorScheme='teal'
                                        variant='outline'
                                        onClick={addValue}>Add values</Button>
                                <Button w='50%' margin={1}
                                        colorScheme='teal'
                                        leftIcon={<CheckIcon/>}
                                        onClick={createChart}>Create chart</Button>
                            </Flex>
                        </Stack>
                    </Container>
                </GridItem>
            </Grid>


        </>
    );
}
export default LineChartCSRCpn