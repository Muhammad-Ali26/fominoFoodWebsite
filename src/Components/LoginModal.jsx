// @ts-nocheck
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import ConfirmMailModal from "./ConfirmMailModal";
import { useLocation } from "react-router-dom";

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Button
          onClick={onOpen}
          textColor="black"
          fontSize="sm"
          fontWeight="semibold"
          border="1px"
          borderRadius="full"
          padding="8px 32px"
          bgColor="transparent"
          _hover={{ bgColor: "black", color: "white" }}
        >
          Login
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          textColor="white"
          fontSize="sm"
          fontWeight="semibold"
          border="1px solid white"
          borderRadius="full"
          padding="8px 32px"
          bgColor="transparent"
          _hover={{ bgColor: "white", color: "#379465" }}
        >
          Login
        </Button>
      )}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="my-10 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-black font-switzer">
                  Create an account or log in
                </h4>
                <p className="text-paraColor font-switzer">
                  Log in below or create a new Fomino account.
                </p>
              </div>
              <div className="space-y-4">
                <button className="flex items-center gap-20 text-black  w-full border border-black rounded-md px-5 py-2 hover:bg-black hover:text-white duration-300">
                  <FcGoogle className="text-2xl" />
                  <span className="font-semibold font-switzer">
                    Continue with Google
                  </span>
                </button>
                <button className="flex items-center gap-20 text-white bg-black  w-full border border-black rounded-md px-5 py-2 hover:bg-white hover:text-black duration-300">
                  <RiAppleFill className="text-2xl" />
                  <span className="font-semibold font-switzer">
                    Continue with Apple
                  </span>
                </button>
                <button
                  className="flex items-center gap-20 text-white  w-full border border-[#1877F2] bg-[#1877F2] rounded-md px-5 py-2 hover:bg-white
                 hover:text-[#1877F2] duration-300"
                >
                  <BsFacebook className="text-2xl" />
                  <span className="font-semibold font-switzer">
                    Continue with Facebook
                  </span>
                </button>
              </div>

              <div className="flex items-center">
                <div className="w-28 h-[1px] bg-paraColor"></div>
                <div className="px-4 text-paraColor font-semibold font-switzer">
                  or login with email
                </div>
                <div className="w-28 h-[1px] bg-paraColor"></div>
              </div>

              <div className="space-y-4">
                <Input placeholder="Email" />
                <Input placeholder="Password" />
              </div>
              <div>
                <ConfirmMailModal />
              </div>

              <div>
                <p className="text-sm font-switzer text-paraColor">
                  Please visit fomino
                  <span className="text-[#009DE0] cursor-pointer">
                    {" "}
                    Privacy Statement
                  </span>{" "}
                  in English to learn about personal data processing at fomino.
                  You can access your local privacy statement related to your
                  fomino account in the next phase of registration after you
                  have provided the country and language preference applicable
                  to you
                </p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
