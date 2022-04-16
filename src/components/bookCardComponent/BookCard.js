import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Text, Image, Center, Tooltip,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import styles from './BookCard.module.css';

const BookCard = ({
  imageUrl, title, author, type, genre, rated,
}) => {
  const [style, setStyle] = useState({display: 'none'});
  return (
    <Box
      maxW='md'
      borderWidth='1px'
      borderRadius='1.4rem'
      overflow='hidden'
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      className={ styles.bookCard }
      _hover={ {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 8px 16px',
        transform: 'translateY(-2px)',
      } }
    >
      <Image src={ imageUrl } alt={ title } />

      <Box p='1.3rem' backgroundColor='white' color='black' className={ styles.bookCardInfo }>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Box
            fontWeight='semibold'
            fontSize='2rem'
            as='h2'
            lineHeight='tight'
            isTruncated
          >
            {title}
          </Box>
          <Tooltip label='Add to my library!' aria-label='A tooltip'>
            <Center margin='4' padding='4' borderRadius='50%' color='white' backgroundColor='var(--primary-color)' fontSize='1.3rem'>
              <AddIcon />
            </Center>
          </Tooltip>
        </Box>

        <Box>
          <Text fontSize='1.6rem' color='gray.600' py='1rem'>
            {author}
          </Text>
          <div className={ styles.bookDetails }>
            <Text fontSize='1.6rem'>
              rem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor
              {' '}
              <Link
                to=':id'
                as={ Link }
                className={ styles.bookDetailsLink }
              >
                continue reading
              </Link>
            </Text>
          </div>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box
            color='var(--gray-color)'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='1.2rem'
            textTransform='uppercase'
            my='2'
          >
            {type}
            {'  '}
            &bull;
            {'  '}
            {genre}
            {'  '}
            &bull;
            {'  '}
            {rated}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BookCard