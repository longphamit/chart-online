'use client'
import {
    Button,
    Container,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Stack,
    Text
} from "@chakra-ui/react";
import PickColorCustom from "./PickColorCustom";
import {AddIcon, CheckIcon, MinusIcon} from "@chakra-ui/icons";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {formCreateChartAction} from "../../../lib/formCreateChartSlice";
import {chartAction, COLOR_BACKGROUND, COLOR_BORDER} from "../../../lib/chartSlice";
import {useTranslations} from 'next-intl';
const FormCreateChart = ({showPickColor, showBorder, baseBorderColor, showOneColor}) => {
    const t = useTranslations("Chart");
    const dispatch = useDispatch()
    const formCreateChartState = useSelector(state => state.formCreateChart)

    const listRef = useRef(null);

    const handleNameOfChart = (value) => {
        dispatch(formCreateChartAction.setNameOfChart({value: value.currentTarget.value}))
    }
    const handleNameOfValue = (value) => {
        dispatch(formCreateChartAction.setNameOfValue({value: value.currentTarget.value}))
    }

    const addValue = () => {
        dispatch(formCreateChartAction.addValue())
    }
    const removeValue = (index) => {
        dispatch(formCreateChartAction.removeValue({index: index}))
    }
    const handleX = (index, value) => {
        dispatch(formCreateChartAction.handleValue({index: index, value: value.currentTarget.value, type: 'x'}))

    }
    const handleY = (index, value) => {
        dispatch(formCreateChartAction.handleValue({index: index, value: value.currentTarget.value, type: 'y'}))

    }
    const createChart = () => {
        let labels = formCreateChartState.data.map(e => e.x);
        let chartData = formCreateChartState.data.map(e => e.y);
        let colors = formCreateChartState.data.map(e => e.color);
        console.log({
            labels: labels,
            datasets: [{
                label: formCreateChartState.nameOfValue,
                data: chartData,
                borderColor: showBorder ? COLOR_BORDER : colors,
                backgroundColor: showOneColor ? COLOR_BACKGROUND : colors,
            }]
        });
        dispatch(chartAction.createChart({
            labels: labels,
            datasets: [{
                label: formCreateChartState.nameOfValue,
                data: chartData,
                borderColor: showBorder ? COLOR_BORDER : baseBorderColor ? COLOR_BACKGROUND : colors,
                backgroundColor: showOneColor ? COLOR_BACKGROUND : colors,
            }],
            nameOfChart: formCreateChartState.nameOfChart
        }))
    }

    useEffect(() => {
        // Check for listRef availability to prevent errors
        if (listRef.current) {
            const listElement = listRef.current;
            listElement.scrollTop = listElement.scrollHeight; // Scroll smoothly
        }
    }, [formCreateChartState.data]);
    return (
        <Container style={{marginTop: 10}}>
            <Stack >
                <InputGroup>
                    <Input onChange={value => handleNameOfChart(value)}
                           placeholder={t('nameOfChart')}/>
                </InputGroup>
                <InputGroup>

                    <Input onChange={value => handleNameOfValue(value)}
                           placeholder={t('nameOfValue')}/>
                </InputGroup>
                <div ref={listRef}
                     style={{maxHeight: 300, overflowY: "scroll", flexDirection: "column-reverse"}}>
                    {
                        formCreateChartState.data?.map((e, index) => {
                            return (
                                <Flex key={index}>
                                    <div style={{paddingTop: 15,paddingRight:5,fontSize:12}}>
                                        <Text>{index + 1}</Text>
                                    </div>
                                    <div style={{padding: 5}}>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <Text fontSize={10} fontWeight={'bold'}>{t('label')}</Text>
                                            </InputLeftElement>
                                            <Input onChange={value => handleX(index, value)}
                                                   placeholder={e.x}/>
                                        </InputGroup>
                                    </div>
                                    <div style={{padding: 5}}>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <Text fontSize={10} fontWeight={'bold'}>{t('value')}</Text>
                                            </InputLeftElement>
                                            <Input
                                                placeholder={e.y}
                                                type='number'
                                                onChange={value => handleY(index, value)}
                                            />
                                        </InputGroup>
                                    </div>
                                    {
                                        showPickColor ? <div style={{padding: 10}}>
                                            <PickColorCustom index={index} colorInit={e.color}/>
                                        </div> : <></>
                                    }

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
                            onClick={addValue}>{t('addValue')}</Button>
                    <Button w='50%' margin={1}
                            colorScheme='teal'
                            leftIcon={<CheckIcon/>}
                            onClick={createChart}>{t('createChart')}</Button>
                </Flex>
            </Stack>
        </Container>
    )
}
export default FormCreateChart