'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Image from 'next/image'



export default function BottomNav({ children, currentPage, onChangePage, pageWidth }: any) {

    return (
        <Box
            sx={{
                pb: 1,
                maxHeight: 57,
            }}
        >
            {children}
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    maxWidth: pageWidth,
                    margin: '0 auto',
                    maxHeight: 57,
                    zIndex: 10000000000000
                }}
                elevation={0}
            >
                <BottomNavigation
                    showLabels
                    value={currentPage}
                    onChange={(event, newPage) => {
                        onChangePage(newPage);
                    }}
                    sx={{
                        backgroundColor: '#1E1E1E',
                        maxWidth: pageWidth,
                        maxHeight: 57,
                        zIndex: 10000000000000

                    }}
                >
                    <BottomNavigationAction
                        label="Главный"
                        icon={
                            <Image
                                src="/images/bottomNav/home.svg"
                                width={27}
                                height={22}
                                alt=''
                            />
                        }
                        sx={{
                            '&.MuiButtonBase-root': {
                                color: 'white',
                                fontSize: 10,
                                opacity: 0.4,
                                justifyContent: 'space-between',
                            },
                            '&.Mui-selected': {
                                color: 'white',
                                opacity: 1,
                                transform: 'none',
                            },
                        }}
                    />
                    <BottomNavigationAction
                        label="Накопления"
                        icon={
                            <Image
                                src="/images/bottomNav/capital.svg"
                                width={27}
                                height={22}
                                alt=''
                            />
                        }
                        sx={{
                            '&.MuiButtonBase-root': {
                                color: 'white',
                                fontSize: 10,
                                opacity: 0.4,
                                justifyContent: 'space-between',
                                padding: '8px 0',
                            },
                            '&.Mui-selected': {
                                color: 'white',
                                opacity: 1,
                                transform: 'none',
                            },
                        }}
                    />
                    <BottomNavigationAction
                        label="Ассистент"
                        icon={
                            <Image
                                src="/images/bottomNav/assistant.svg"
                                width={27}
                                height={22}
                                alt=''

                            />
                        }
                        sx={{
                            '&.MuiButtonBase-root': {
                                color: 'white',
                                fontSize: 10,
                                opacity: 0.4,
                                justifyContent: 'space-between',
                                padding: '8px 0',
                            },
                            '&.Mui-selected': {
                                color: 'white',
                                opacity: 1,
                                transform: 'none',
                            },
                        }}
                    />
                    <BottomNavigationAction
                        label="Платежи"
                        icon={
                            <Image
                                src="/images/bottomNav/payments.svg"
                                width={24}
                                height={16}
                                alt=''
                            />
                        }
                        sx={{
                            '&.MuiButtonBase-root': {
                                color: 'white',
                                fontSize: 10,
                                opacity: 0.4,
                                justifyContent: 'space-between',
                                padding: '8px 0',
                            },
                            '&.Mui-selected': {
                                color: 'white',
                                opacity: 1,
                                transform: 'none',
                            },
                        }}
                    />
                    <BottomNavigationAction
                        label="История"
                        icon={
                            <Image
                                src="/images/bottomNav/history.svg"
                                width={25}
                                height={20}
                                alt=''
                            />
                        }
                        sx={{
                            '&.MuiButtonBase-root': {
                                color: 'white',
                                fontSize: 10,
                                opacity: 0.4,
                                justifyContent: 'space-between',
                                padding: '8px 0',
                            },
                            '&.Mui-selected': {
                                color: 'white',
                                opacity: 1,
                                transform: 'none',
                            },
                        }}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}



const messageExamples: any = [
    '1',
    '2',
    '3',
    '4',
    '5',
];