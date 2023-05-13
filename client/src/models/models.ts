export interface IRoute {
	path: string, 
	component: React.FC
}

export interface IMessage {
	id: string
	author: string
	text: string
}