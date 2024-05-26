import { IInputs } from "../generated/ManifestTypes"
export type ControlProps = {
	context: ComponentFramework.Context<IInputs>,
	selectedValue: (value: number) => void
}