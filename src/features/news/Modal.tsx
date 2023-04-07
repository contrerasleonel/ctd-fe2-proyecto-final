import { PropsModal } from "./noticias.types";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";

// Se aplicó el Principio de responsabilidad única.

const Modal = ({ showModal, cerrar, suscribir }: PropsModal) => {
  const esPremium = showModal?.esPremium;
  return showModal !== null ? (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={cerrar}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal
          src={esPremium ? SuscribeImage : showModal.imagen}
          alt={esPremium ? "mr-burns-excelent" : "news-image"}
        />
        <CotenedorTexto>
          <TituloModal>
            {esPremium ? "Suscríbete a nuestro Newsletter" : showModal.titulo}
          </TituloModal>
          <DescripcionModal>
            {esPremium
              ? "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."
              : showModal.descripcion}
          </DescripcionModal>
          {esPremium ? (
            <BotonSuscribir onClick={suscribir}>
              Suscríbete
            </BotonSuscribir>
          ) : null}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  ) : null;
};

export default Modal;