import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';


import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    // Para o react ler e interpretar em tempo real o valor da variável, é necessário utilizar o conceito de estado e criar a variável utilizando o método useState
    // Retorna os nossos itens e uma função que substitui o valor original da variável, já que o valor inicial é imutável
    const [scheduleItems, setScheduleItems] = useState(
        [
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]
    );

    function handleCreateClass(e: FormEvent) {

        // if (!name) {
        //     alert("Nome não pode ficar vazio")
        // }

        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    function addNewScheduleItem() {
        // Copiando o array usando o spread operator
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    }

    // setScheduleItemValue(0, 'week_day', '2')

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItem);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que bom que vc quer dar aulas!"
                description="Preencha o formulário de inscrição" />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name"
                            label="Nome completo"
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                            }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={e => {
                                setAvatar(e.target.value)
                            }}
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={e => {
                                setWhatsapp(e.target.value)
                            }}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={e => {
                                setBio(e.target.value)
                            }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={e => { setSubject(e.target.value) }}
                            // Adicionando as options do select usando um array de objetos
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'História', label: 'História' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={e => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}> {/* O botão chama a função de adicionar item*/}
                            + Novo horário
                    </button>
                        </legend>

                        {/* Percorre o array com os itens de agendamento para criar mais de um elemento na tela */}
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        // Adicionando as options do select usando um array de objetos
                                        options={[
                                            { value: '0', label: 'Segunda-Feira' },
                                            { value: '1', label: 'Terça-Feira' },
                                            { value: '2', label: 'Quarta-Feira' },
                                            { value: '3', label: 'Quinta-Feira' },
                                            { value: '4', label: 'Sexta-Feira' }
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>

        </div>
    )
}

export default TeacherForm;