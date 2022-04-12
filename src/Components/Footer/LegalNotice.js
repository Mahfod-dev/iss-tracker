import style from "./Footer.module.css"

export default function LegalNotice() {
	return (
		<>
		<div className={style["legal-notice"]}>
			<span >This website been made by students of the Wild Code School</span>
			<span> November 2021 - April 2022.</span>
		</div>
		</>
	)
}
