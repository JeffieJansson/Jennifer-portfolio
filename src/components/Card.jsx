import styled from "styled-components";

// (HTML, CSS, API…)
export const TagsRow = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px 10px;
	align-self: stretch;
`;

// single tag
export const Tag = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 6px 10px;
	border-radius: 6px;
	border: 1px solid #000;
	background: #fff;
	font-size: 14px;
	line-height: 1.2;
	white-space: nowrap;

	@media (max-width: 640px) {
		padding: 6px 8px;
		font-size: 12px;
	}
`;