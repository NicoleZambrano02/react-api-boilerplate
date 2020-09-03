import React from 'react';
import { Avatar, Card, Row, Col, Radio } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../providers/Auth';
import '../styles/user-profile.css';

const { Meta } = Card;

const UserProfile = ( props ) => {

  const auth = useAuth();
  const useEffect = () => {
    console.log( 'USUARIO', auth.currentUser );
  };

  return (
    <>
      <Row>
        <Col span={8}/>
        <Col span={8} className={'profile'}>
          <h1>Perfil de Usuario {useEffect()}</h1>
          <Card
            style={ { width: 500 } }
            cover={
              <Avatar shape='square' size={ 500 } icon={ <UserOutlined /> } />
            }
          >
            <Meta
              title=
                { auth.currentUser.credential_number
                  ?
                  <div>
                    <p>Nombre: { auth.currentUser.name }</p>
                    <p>Rol: Administrador</p>
                    <p>Email: { auth.currentUser.email }</p>
                  </div>
                  :
                  <div>
                    <p>Nombre: { auth.currentUser.name }</p>
                    <p>Rol: Escritor</p>
                    <p>Email: { auth.currentUser.email }</p>
                    <p>Editorial: { auth.currentUser.editorial }</p>
                    <p>Biografía: { auth.currentUser.short_bio }</p>
                  </div>
                }
            />
          </Card>
        </Col>
        <Col span={8}/>
      </Row>
      <h1>Categorías a las que estás suscrito</h1>
      {
        props.categories &&
        <Row justify='left'>
          <Col>
            <ul>
              {
                props.categories.map( ( category, index ) =>
                  <li key={ index } >
                    { category.name }
                  </li> )
              }
            </ul>
          </Col>
        </Row>
      }

    </>
  );
};

export default UserProfile;