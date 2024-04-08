'use client'
import {Button, Container, Flex, IconButton, Input, InputGroup, InputLeftElement, Stack, Text} from "@chakra-ui/react";
import PickColorCustom from "@/app/components/PickColorCustom";
import {AddIcon, CheckIcon, MinusIcon} from "@chakra-ui/icons";
import {useEffect, useRef} from "react";

const FormCreateChart = ({nameOfChart,nameOfValue}) => {
    const listRef = useRef(null);
    useEffect(() => {
        // Check for listRef availability to prevent errors
        if (listRef.current) {
            const listElement = listRef.current;
            listElement.scrollTop = listElement.scrollHeight; // Scroll smoothly
        }
    }, [data]);
    const handleNameOfChart = (value) => {
        setNameOfChart(value.currentTarget.value)
    }
    const handleNameOfValue = (value) => {
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

    return (
        <Container style={{marginTop: 10}}>
            <Stack spacing={4}>
                <InputGroup>

                    <Input onChange={value => handleNameOfChart(value)}
                           placeholder="Name of chart"/>
                </InputGroup>
                <InputGroup>

                    <Input onChange={value => handleNameOfValue(value)}
                           placeholder="Name of value"/>
                </InputGroup>
                <div ref={listRef}
                     style={{maxHeight: 300, overflowY: "scroll", flexDirection: "column-reverse"}}>
                    {
                        data?.map((e, index) => {
                            return (
                                <Flex key={index}>
                                    <div style={{padding: 5}}>
                                        <Text>{index + 1}</Text>
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
                                    <div style={{padding: 10}}>
                                        <PickColorCustom/>
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
    )
}
export default FormCreateChart