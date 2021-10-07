import React, { useState } from 'react';
import styled from 'styled-components';
import Estilos from './1 - Style/Estilos';
import TodoListFunctional from './2 - CiclodeVida/TodoListStatefull';
import Parte3 from './3 - Formulários/Parte3';
import { Link } from 'react-router-dom';
import Home from '../Home';

const ClassRoom = styled.div`
	display: flex;
	flex-direction: column;
`;

const ClassRoomControls = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0;
	background: #5f6aff;
	padding: 10px;
`;

const ClassRoomBoard = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;

function goHome(){	
	alert("Mover página para HOME falta configurar funcão")
}

const Aula1 = () => {
	const [topic, setTopic] = useState(1);

	return (
		<>
		<ClassRoom>
			<ClassRoomControls>
				
				<button onClick={() => goHome()}>Home</button>	
				<button onClick={() => setTopic(1)}>Style</button>
				<button onClick={() => setTopic(2)}>Life Cycle</button>
				<button onClick={() => setTopic(3)}>Forms</button>
				
			</ClassRoomControls>

			<ClassRoomBoard>				 
				{topic === 1 && <Estilos />}
				{topic === 2 && <TodoListFunctional />}
				{topic === 3 && <Parte3 />}
				{topic === 0 && <Home />}
			</ClassRoomBoard>
		</ClassRoom>

		<Link to="/">Home</Link><br/>

   </>
		
	);
}

export default Aula1;
