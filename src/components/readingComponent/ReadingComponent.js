import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import getAxiosInstance from '../../services/axios';
import { getBook, getUserData } from '../../store/slice/neverlandUserSlice';
import LoadingComponent from '../loadingComponent/LoadingComponent';
import styles from './ReadingComponent.module.css'

const ReadingComponent = () => {
  const token = useSelector(getUserData)?.token;
  const [book, setBook] = useState(null)
  const [numPage, setNumPages] = useState(book?.pageTotal);
  const [pageNumber, setPageNumber] = useState(1);
  const bookId = useParams()?.bookId;
  const url = book?.content;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const fetchBookPdf = async () => {
    const response = await getAxiosInstance(token).get(
      `api/v1/book/overview/${ bookId }`,
    )

    console.log(response.data.data)
    if (response.data.status === 'success') {
      setBook(response.data.data);
      setNumPages(response.data.data.pageTotal)
    }
  }

  // response.data.data.pageNo
  const savePage = async () => {
    const response = await getAxiosInstance(token).put(
      `api/v1/book/read/${ bookId }`,
      { bookId, pageNo: pageNumber },
    )

    console.log(response.data.data)
    if (response.data.status === 'success') {
      setBook(response.data.data);
      setNumPages(response.data.data.pageTotal)
    }
  }

  useEffect(() => {
    fetchBookPdf()
    return () => {
      savePage()
    }
  }, [])

  const renderPDF = (
    <div className={ styles.wrapper }>
      <span className={ styles.navigation1 }>
        {pageNumber > 1 && <img onClick={ previousPage } className='nav-icon' src={ arrowLeft } alt='Next Page' />}
      </span>
      <div className={ styles.readingPage }>
        <div className={ styles.bookTitle }>{book?.name}</div>
        {/* {scroll
          ? (
            <Document file='/sample.pdf' onLoadSuccess={ onDocumentLoadSuccess }>
              {Array.from(new Array(numPage), (el, index) => (
                <Page key={ `page_${ index + 1 }` } pageNumber={ index + 1 } />
              ))}
            </Document>
          ) : ( */}
        <div className={ styles.pdfDisplay }>
          <span>
            <Document
              file='./sample'
              // file={ `https://cors-anywhere.herokuapp.com/${ url }` }
              onDocumentLoadSuccess={ onDocumentLoadSuccess }
            >
              <Page pageNumber={ pageNumber } height600px />
            </Document>
          </span>
        </div>
        {/* )} */}
        <p>{`${ pageNumber } of ${ numPage }`}</p>
      </div>
      <span className={ styles.navigation2 }>
        {pageNumber < numPage && <img onClick={ nextPage } src={ arrowRight } alt='Next Page' />}
      </span>
    </div>
  )

  return <>{book ? renderPDF : <LoadingComponent />}</>
}

export default ReadingComponent;
