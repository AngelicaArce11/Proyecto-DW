import { useState } from 'react';
import { NavBar } from "../../elements/NavBar";
import { TableElement } from "../../elements/Table";
import { Button, Modal } from "flowbite-react";
import {HiOutlineExclamationCircle, HiCurrencyDollar} from "react-icons/hi2";

const missions = [
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcados.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcados.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcados.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcados.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcados.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcados.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcadosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcadosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcadosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcadosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcadosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcadosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
        estado: 'En progreso',
        pago: 20,
    },
    {
        nombre: 'Marco Botton', 
        descripcion: 'Eliminar al objetivo sin ser detectado y recuperardocumentos clasifcadosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
        estado: 'En progreso',
        pago: 20,
    },
]

export const CancelMissionPage = () => {

    // Obtenemos el tipo de usuario
    const user = 'assassin';
    // Monedas del usuario
    const coins = 40;

    // Estado para manejar el modal para confirmar la cancelacion de una mision
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <NavBar user={user}></NavBar>
            {/* Titulo de la pagina */}
            <div className='flex justify-center items-center mt-30'>
                <h5 className='text-white font-bold text-2xl lg:text-5xl'> Cancelar Misión </h5>
            </div>
            {/* Tabla con las misiones */}
            <div className='w-full pt-15 px-2 sm:px-15'>
                <TableElement header={['Nombre del objetivo', 'Descripción', 'Estado', 'Pago', '']} data={missions} nameButton='Cancelar' colorButton='pinkToOrange'onClick={() => setOpenModal(true)} ></TableElement>
            </div>
            {/* Modal de confirmacion o cancelacion */}
            <Modal size="md" show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            ¿ Estás seguro de cancelar esta misión ?
                        </h3>
                    </div>
                    {user === 'assassin' ? (
                        <>
                            <div className='flex justify-end'>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Monedas disponibles: {coins}
                                </h3>
                                < HiCurrencyDollar className='text-yellow-500 m-2'></HiCurrencyDollar>
                            </div>
                            <div className='text-center'>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Se te va a realizar un desembolso de 40 monedas.
                                </h3>
                            </div>
                        </>
                    ): null}
                    
                    <div className="flex justify-center gap-4">
                        <Button color="success" onClick={() => setOpenModal(false)}>
                            Sí, estoy seguro
                        </Button>
                        <Button color="failure" onClick={() => setOpenModal(false)}>
                            Cancelar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}