import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color:#222;
    color:#fff;
    padding: 50px 0;
`
const Title = styled.h1`
    margin:0;
    font-weight:normal;
`
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`
const Wrapper = styled.div`
    display:grid;
    grid-template-columns: .8fr 1.2fr;
    gap:40px;
    img{
        max-width:100%;
    }
` 
const Column = styled.div`
    display: flex;
    align-items: center;
    
`

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <Title>Pro anywhere</Title>
                            <Desc>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of
                            </Desc>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://cdn.mos.cms.futurecdn.net/X2AiWr8X4De7Ro6c5huXq3.jpg"/>
                    </Column>
                </Wrapper>
            </Center>
        </Bg>


    )
}