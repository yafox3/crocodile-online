import React from 'react'
import s from './Loader.module.scss'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
	<div className={s.loader}>
		<Spinner variant='light' animation='border' />
	</div>
  )
}

export default Loader
