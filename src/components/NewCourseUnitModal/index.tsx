import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { Container,Error } from './styles';

interface NewCourseUnitModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewCourseUnitModalData {
    name: string;
    description: string;
}

export function NewCourseUnitModal({isOpen, onRequestClose}: NewCourseUnitModalProps){

    const {register, handleSubmit, formState: {errors}} = useForm<NewCourseUnitModalData>();

    const onSubmit = handleSubmit(data => alert (JSON.stringify(data)));

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-modal-content"        
        >
            <Container>
                <h2>Cadastrar Unidade Curricular</h2>
                <button 
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-modal-content"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        placeholder="Nome"
                        {... register("name", {required: true})}
                    />
                    {errors.name && <Error>Preenchimento do campo é Obrigatório!</Error>}
                    <input 
                        type="text"
                        placeholder="Descrição"
                        {... register("description", {required: true})}
                    />
                    {errors.description && <Error>Preenchimento do campo é Obrigatório!</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>

        </Modal>
    )
}