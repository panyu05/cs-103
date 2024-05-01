import useSWR from "swr";
import styled from "styled-components";

const StyleddDiv=styled.div`
    margin: 5%;
    text-align: center;
    
`;

const StyledHeading=styled.h2`
    font-variant: all-small-caps;
    font-weight: bold;
    color: midnightblue;
`;

const StyledImage=styled.img`
    border: slateblue solid 3px;
`;

function App() {

    const {data, error} =
        useSWR('https://rickandmortyapi.com/api/character',
            (url)=>
                fetch(url).then((res) => res.json())
            );

    if (error) return <p>{error.message}</p>;
    if (!data) return <p>Loading...</p>;

  return (
    <>
        {
            data.results.map((character) =>
                (
                    <StyleddDiv key={character.id}>
                        <StyledHeading>{character.name}</StyledHeading>
                        <StyledImage src={character.image} alt={character.name}/>
                    </StyleddDiv>
                )
            )
        }
    </>
  )
}

export default App
