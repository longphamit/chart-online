import {
    Button, Center, Input,
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger, SimpleGrid
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import randomColor from 'randomcolor';
import {useDispatch, useSelector} from "react-redux";
import {formCreateChartAction} from "@/lib/formCreateChartSlice";
import { v4 as uuidv4 } from 'uuid';


const PickColorCustom = ({index,colorInit}) => {
    const randomColorTool = randomColor;
    const dispatch = useDispatch()
    const formCreateChartState = useSelector(state => state.formCreateChart)

    const [color, setColor] = useState(colorInit);
    const [colors, setColors] = useState();
    const handlePickColor = (value) => {
        setColor(value)
        dispatch(formCreateChartAction.handleValue({index: index, value: value, type: 'color'}))
    }
    useEffect(()=>{
        setColors(randomColorTool({count: 50}))
    },[])
    return (
        <Popover variant="picker">
            <PopoverTrigger>
                <Button
                    aria-label={color}
                    background={color}
                    height="22px"
                    width="22px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={3}
                ></Button>
            </PopoverTrigger>
            <PopoverContent width="170px">
                <PopoverArrow bg={color}/>
                <PopoverCloseButton color="white"/>
                <PopoverHeader
                    height="100px"
                    backgroundColor={color}
                    borderTopLeftRadius={5}
                    borderTopRightRadius={5}
                    color="white"
                >
                    <Center height="100%">{color}</Center>
                </PopoverHeader>
                <PopoverBody height="100%">
                    <SimpleGrid columns={5} spacing={2}>
                        {colors?.map((c) => (
                            <Button
                                key={uuidv4()}
                                aria-label={c}
                                background={c}
                                height="22px"
                                width="22px"
                                padding={0}
                                minWidth="unset"
                                borderRadius={3}
                                _hover={{background: c}}
                                onClick={() => {
                                    handlePickColor(c);
                                }}
                            >
                            </Button>
                        ))}
                    </SimpleGrid>
                    <Input
                        borderRadius={3}
                        marginTop={3}
                        placeholder="red.100"
                        size="sm"
                        value={color}
                        onChange={(e) => {
                            handlePickColor(e.target.value);
                        }}
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
export default PickColorCustom