"use client";

import { useEffect, useState } from 'react'
import { getAllEmployees } from './constants';

export const useGetAllEmployees = () => {
    const [tableContentList, setTableContentList] = useState([]);

    useEffect(() => {
        getAllEmployees()
            .then((data) => {
                setTableContentList(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return { tableContentList }
}
