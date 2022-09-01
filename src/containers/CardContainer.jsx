import React from "react"

const CardContainer = ({ children }) => {
	return (
		<section class="main-container">
			<div class="cards-container">{children}</div>
		</section>
	)
}

export default CardContainer
