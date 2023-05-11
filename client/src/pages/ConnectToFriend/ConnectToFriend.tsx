import React from 'react'
import s from './ConnectToFriend.module.scss'
import Logo from '../../components/Logo/Logo'
import ControlBox from '../../components/ControlBox/ControlBox'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

const ConnectToFriend: React.FC = () => {
	return (
		<>
			<Logo />
			<ControlBox>
				<h2 className='title'>Введите ID комнаты</h2>
				<div className={s.form}>
					<Input
						placeholder='ID комнаты'
						w='100%'
						h='50px'
					/>
					<Button
						variant='primary' 
						w='190px'
						h='40px'
					>
						Подключиться
					</Button>
					<Button
						variant='secondary' 
						w='190px'
						h='40px'
					>
						Назад
					</Button>
				</div>
			</ControlBox>
		</>
	)
}

export default ConnectToFriend
