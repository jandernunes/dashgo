import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

export default function Dashboard() {
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            foreColor: theme.colors.gray[500]
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: theme.colors.gray[600]
            },
            axisTicks: {
                color: theme.colors.gray[600]
            },
            categories: [
                '2022-06-10T00:00:00Z',
                '2022-06-11T00:00:00Z',
                '2022-06-12T00:00:00Z',
                '2022-06-13T00:00:00Z',
                '2022-06-14T00:00:00Z',
                '2022-06-15T00:00:00Z',
            ]
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3,
            },
        },
    };

    const series = [
        { name: 'series1', data: [31, 50, 20, 60, 80, 20]}
    ]

    
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    );
}