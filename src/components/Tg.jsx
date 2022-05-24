import styled from "styled-components"


const Tg=styled.p`
color: ${(props)=>
props.cont=="veg"?"green":"red"
};
`
export {Tg}