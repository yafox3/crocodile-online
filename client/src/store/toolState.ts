import { makeAutoObservable } from 'mobx'
import Brush from '../tools/Brush'
import Tool from '../tools/Tool'

class ToolState {
	tool: Brush | Tool | any = null

	constructor() {
		makeAutoObservable(this)
	}

	setTool (tool: Brush) {
		this.tool = tool
	}

	setStrokeColor (color: any) {
		this.tool.strokeColor = color
	}
}
// eslint-disable-next-line
export default new ToolState()