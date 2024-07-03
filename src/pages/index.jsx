import imagen from '../static/images/Inicio.jpeg';

const Index = () => {
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
        
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={imagen} style={{maxWidth: '70%', height: 'auto'}} alt="Inicio" />
            </div>
        </div>
    );
}
export default Index;