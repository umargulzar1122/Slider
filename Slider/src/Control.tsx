import { Slider } from 'antd'
import * as React from 'react'
import { ControlProps } from '../types/ControlProps'

const Control = ({ context, selectedValue }: ControlProps) => {
	return (
		<>
			<Slider defaultValue={context.parameters.inputValue.raw} onChangeComplete={(e: number) => {
				selectedValue(e);
			}} />
		</ >
	)
}

export default Control