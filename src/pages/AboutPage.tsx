import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis quasi 
                reprehenderit blanditiis alias eius, commodi libero nisi fugit. Repellat tenetur ipsum odio 
                consequuntur mollitia sunt reprehenderit asperiores a dolore?
            </p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    );
};

export default AboutPage;