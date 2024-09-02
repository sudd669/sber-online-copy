'use client'

import Image from "next/image";
import BottomNav from "@/app/ui/BottomNav";
import * as React from "react";
import Box from "@mui/material/Box";
import Main from "@/app/components/Main";
import Capital from "@/app/components/Capital";
import Payments from "@/app/components/Payments";
import History from "@/app/components/History";
import {useEffect, useState} from "react";
import Controls from "@/app/components/Controls";
import PayProcessModal from "@/app/components/PayProcessModal";
import {any} from "prop-types";







export default function Home() {
    const [currentPage, setCurrentPage]: any = useState(0);
    const [isControlsOpen, setIsControlsOpen]: any = useState(1);

    const [balance, setBalance]: any = useState('4 062,00');
    const [expenses, setExpenses]: any = useState('72 048');
    const [paySum, setPaySum]: any = useState('0');
    const [payName, setPayName]: any = useState('');
    const [month, setMonth]: any = useState('сентябре');
    const [sumYesterday, setSumYesterday]: any = useState('16 700');
    const [sumToday, setSumToday]: any = useState('0');
    const [depositsToday, setDepositsToday]: any = useState('0');

    const [scale, setScale]: any = useState(1);

    const [isPayProcessModalOpen, setIsPayProcessModalOpen]: any = useState(false);

    const [isCheckLoaded, setIsCheckLoaded]: any = useState(1);
    const [isCheckOpen, setIsCheckOpen]: any = useState(1);
    const [checkData, setCheckData]: any = useState([]);


    const [paymentsYesterday, setPaymentsYesterday] = useState([
        {
            name: 'Александр Александрович Ж.',
            desc: 'Клиенту Сбера',
            sum: '9 000',
            person: '/images/history/sber.svg',
        },
        {
            name: 'Марина Сергеевна И.',
            desc: 'В другой банк',
            sum: '600',
            person: '',
        },
        {
            name: 'Георгий Янович П.',
            desc: 'В другой банк',
            sum: '1 220',
            person: '',
        },
        {
            name: 'Афанасий Александрович Ж.',
            desc: 'Клиенту Сбера',
            sum: '120',
            person: '/images/history/sber.svg',
        },
        {
            name: 'Владимир Дмитриевич Д.',
            desc: 'Клиенту Сбера',
            sum: '500',
            person: '/images/history/sber.svg',
        },
        {
            name: 'Александр Александрович Ж.',
            desc: 'Клиенту Сбера',
            sum: '500',
            person: '/images/history/sber.svg',
        },
    ])


    const [paymentsToday, setPaymentsToday]: any = useState([])

    const handleOpenCheck = () => {
        setIsCheckOpen((isOpen: any) => !isOpen);
    };
    const handlePayProcessModal = () => {
        setIsPayProcessModalOpen((isOpen: any) => !isOpen);
    };

    const handleControl = () => {
        setIsControlsOpen((isOpen: any) => !isOpen);
    };

    const onChangePage: any = (newPage: any) => {
        setCurrentPage(newPage)
    }

    const changeBalance: any = (newBalance: any) => {
        setBalance(newBalance);
    };
    const changeExpenses: any = (newExpenses: any) => {
        setExpenses(newExpenses);
    };
    const changePaySum: any = (newSum: any) => {
        setPaySum(newSum);
    };

    const changePayName: any = (newName: any) => {
        setPayName(newName);
    };
    const changeMonth: any = (newMonth: any) => {
        setMonth(newMonth);
    };
    const changeSumYesterday: any = (sumYesterday: any) => {
        setSumYesterday(sumYesterday);
    };


    const doPay = () => {
        const balanceNumeric = parseFloat(balance.replace(/\s/g, '').replace(',', '.'));
        const sumTodayNumeric = parseFloat(sumToday.replace(/\s/g, '').replace(',', '.'));
        const expensesNumeric = parseFloat(expenses.replace(/\s/g, '').replace(',', '.'));
        const paySumNumeric = parseFloat(paySum.replace(/\s/g, '').replace(',', '.'));

        const newBalance = balanceNumeric - paySumNumeric;
        const newExpenses = expensesNumeric + paySumNumeric;

        const formattedBalance = newBalance.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });



        const formattedSumToday = paySumNumeric.toLocaleString('ru-RU', {
            useGrouping: true, // Enable thousands separator
            separator: ' ' // Set space as the separator
        });
        const formattedExpensesSum = newExpenses.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        const newPayment: any = {
            name: payName, // Assuming you have a 'payName' variable available
            desc: 'Клиенту Сбера', // You can make this dynamic if needed
            sum: formattedSumToday,
            person: '/images/history/sber.svg',
        };

        // Update the state with the formatted balance
        setBalance(formattedBalance);
        setSumToday(formattedSumToday);
        setPaymentsToday((prevPayments) => [...prevPayments, newPayment]);
        setExpenses(formattedExpensesSum);
    };


    function getRandomNumber({ min, max }: any): any {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    const addDeposit: any = () => {
        const randomSum = getRandomNumber({ min: 500, max: 20000 });
        const newSumToday = Math.floor(randomSum);

        // Convert to integers for calculation
        const depositsSumNumeric = Math.floor(parseFloat(depositsToday.replace(/\s/g, '').replace(',', '.')));
        const newDepositsToday = depositsSumNumeric + randomSum;

        // Format with space as thousands separator and no decimals
        const formattedDepositsSum = newDepositsToday.toLocaleString('ru-RU', {
            useGrouping: true, // Enable thousands separator
            separator: ' ' // Set space as the separator
        });
        // Format with space as thousands separator and no decimals
        const formattedSumToday = newSumToday.toLocaleString('ru-RU', {
            useGrouping: true, // Enable thousands separator
            separator: ' ' // Set space as the separator
        });

        const newPayment: any = {
            name: 'Геннадий Ефимов Г.',
            desc: 'Клиент Сбера',
            sum: '+ ' + formattedSumToday,
            person: '/images/history/sber.svg',
        };

        setPaymentsToday((prevPayments) => [...prevPayments, newPayment]);
        setDepositsToday(formattedDepositsSum);
    };

    const useScreenWidth = () => {
        const [screenWidth, setScreenWidth] = useState<number>(0);

        useEffect(() => {
            const handleResize = () => {
                setScreenWidth(window.innerWidth < 500 ? window.innerWidth : 363);
            };

            handleResize(); // Initial setup on component mount
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return screenWidth;
    };

// Define pageWidth and pageHeight outside useEffect
    const pageWidth = useScreenWidth();
    const pageHeight = 807;

// Your scaling logic
    useEffect(() => {
        const updateScale = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const scaleX = screenWidth / pageWidth;
            const scaleY = screenHeight / pageHeight;

            const newScale = Math.min(scaleX, scaleY);


            // Assuming you have a 'setScale' function defined elsewhere
            setScale(newScale);
        };

        updateScale(); // Initial setup on component mount
        window.addEventListener('resize', updateScale);

        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const shuffleYesterdayMessages: any = () => {
        const shuffledPayments: any = [...paymentsYesterday];

        for (let i: any = shuffledPayments.length - 1; i > 0; i--) {
            const j: any = Math.floor(Math.random() * (i + 1));
            [shuffledPayments[i], shuffledPayments[j]] = [shuffledPayments[j], shuffledPayments[i]];
        }

        setPaymentsYesterday(shuffledPayments);
    };

    const renderPage: any = () => {
        switch (currentPage) {
            case 0:
                return <Main
                    balance={balance}
                    expenses={expenses}
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    handleControl={handleControl}
                    month={month}
                />;
            case 1:
                return <Capital />;
            case 2:
                return <div>Assistant</div>;
            case 3:
                return <Payments />;
            case 4:
                return <History
                    paymentsYesterday={paymentsYesterday}
                    sumYesterday={sumYesterday}
                    paymentsToday={paymentsToday}
                    sumToday={sumToday}
                    depositsToday={depositsToday}
                />;
            default:
                return <Main
                    balance={balance}
                    expenses={expenses}
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    handleControl={handleControl}
                    month={month}
                />;
        }
    };




    return (
        <Box
            sx={{
                margin: '0 auto',
                alignSelf: 'center',
            }}
        >
            <Controls
                isOpen={isControlsOpen}
                balance={balance}
                changeBalance={changeBalance}
                expenses={expenses}
                changeExpenses={changeExpenses}
                month={month}
                changeMonth={changeMonth}
                sumYesterday={sumYesterday}
                changeSumYesterday={changeSumYesterday}
                shuffleYesterdayMessages={shuffleYesterdayMessages}
                addDeposit={addDeposit}
            />

            <div
                style={{
                    backgroundImage: 'url("/images/bgs/bg1.svg")',
                    backgroundSize: 'cover',
                    width: pageWidth,
                    height: pageHeight,
                    overflow: 'hidden',
                    transform: `scale(${scale})`,
                }}
            >
                <BottomNav
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                    pageWidth={pageWidth}
                >
                    <PayProcessModal
                        isOpen={isPayProcessModalOpen}
                        handleModal={handlePayProcessModal}
                        paySum={paySum}
                        changePaySum={changePaySum}
                        payName={payName}
                        changePayName={changePayName}
                        doPay={doPay}
                        pageWidth={pageWidth}
                        renderPage={renderPage}
                        onChangePage={onChangePage}

                        isCheckLoaded={isCheckLoaded}
                        isCheckOpen={isCheckOpen}
                        handleOpenCheck={handleOpenCheck}
                        checkData={checkData}

                    />
                    <div>{renderPage()}</div>
                </BottomNav>
            </div>
        </Box>

    );
}
