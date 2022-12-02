import React, {useEffect} from "react";
import Pagination from "rc-pagination";
import {setOrganisationPageNumber} from "../../redux/organisationList/organisationListAction";
import {useDispatch, useSelector} from "react-redux";
import 'rc-pagination/assets/index.css';


const SimplePagination = (props) => {

    const {pageNumber} = props;
    const dispatch = useDispatch();

    const totalPage = useSelector(state => state.organisationListReducer.totalPages);
    const statePageNumber = useSelector(state => state.organisationListReducer.pageNumber);

    useEffect(() => {
        dispatch(setOrganisationPageNumber(1));
    }, []);

    useEffect(() => {}, [statePageNumber]);

    const handleChangePageNumber = (pageNumber) => {
        dispatch(setOrganisationPageNumber(pageNumber))
    }



    return(
        <div className='flex justify-center items-center my-6'>
            <Pagination
                onChange={(number) => handleChangePageNumber(number)}
                current={pageNumber}
                total={totalPage * 6}
                pageSize={6}
            />
        </div>
    )
}

export default SimplePagination;