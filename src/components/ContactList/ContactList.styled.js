import styled from "@emotion/styled";

export const List = styled.ul`
margin-top: 30px;
font-weight: 500;
font-size: 18px;`;

export const ListItem = styled.li`
display: flex;
justify-content: space-between;
border-radius: 4px;
width: 350px;
padding: 5px;
:not(:last-child){
margin-bottom: 5px;
}`;

export const ButtonList = styled.button`
width: 50px;
height: auto;
border-radius: 5px;
cursor: pointer;
:hover{
    background-color: #800000
}
`;