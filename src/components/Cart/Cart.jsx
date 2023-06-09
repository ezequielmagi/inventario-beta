import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Link,
  HStack,
} from "@chakra-ui/react";
import React from 'react'
import carrito from "../../img/carrito.png";
import { UseContextShop } from "../Context/Context";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { cart, quantityTotal, deleteProduct, Total } = UseContextShop();

  const subtTotal = (price, quantity) => {
    return price * quantity;
  };

  const text = cart.reduce((mess, prod) => mess.concat(`Producto: ${prod.title} - cantidad: ${prod.quantity}\n`),"");
  const PagoTerminado = text.concat(`Precio Total :$${Total()}`);


  return (
    <Stack>
      <Container maxW="container.xl">
        <Stack direction="row" align="center" justify="center">
          <Text flex={1} textAlign="center" fontSize={40} fontWeight="600">
            Inventario<span style={{ color: "green" }}>Online</span>
          </Text>
          <Stack align="center" spacing={0} direction="row">
            <HStack>
              {/* <Button onClick={onOpen} colorScheme="teal" variant="outline">
                {quantityTotal()}
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src={carrito}
                  alt="Dan Abramov"
                />
              </Button> */}
            </HStack>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              size="xl"
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrito</DrawerHeader>

                <DrawerBody overflowY="scroll">
                  {cart.length === 0 ? (
                    <Text textAlign="center" color="red">
                      No hay productos en el carrito
                    </Text>
                  ) : (
                    <TableContainer maxW="container.md">
                      <Table size="md">
                        <Thead>
                          <Tr>
                            <Th>Eliminar</Th>
                            <Th>Producto</Th>
                            <Th>Titulo</Th>
                            <Th>Cantidad</Th>
                            <Th>Subtotal</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {cart.map((item) => (
                            <Tr key={item.id}>
                              <Td>
                                <Button
                                  colorScheme="red"
                                  size="sm"
                                  onClick={() => deleteProduct(item.id)}
                                  variant="outline"
                                >
                                  {" "}
                                  x
                                </Button>{" "}
                              </Td>

                              <Td align="center">
                                <Image boxSize="70px" src={item.image} />{" "}
                              </Td>
                              <Td fontSize={13}>{item.title}</Td>
                              <Td>{item.quantity}</Td>
                              <Td>
                                {" "}
                                $
                                {subtTotal(
                                  parseInt(item.price),
                                  item.quantity
                                )}{" "}
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  )}
                </DrawerBody>

                <Stack direction="row" justifyContent="flex-end">
                  <Text px={2} fontSize={20}>
                    Precio Total : ${" "}
                    <span style={{ fontWeight: "700" }}> {Total()} </span>{" "}
                  </Text>
                  <Stack direction="row">
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      as={Link}
                      href={`https://wa.me/54111111111?text=${encodeURIComponent(PagoTerminado)}`}
                      colorScheme="blue"
                    >
                      Terminar Compra
                    </Button>
                  </Stack>
                </Stack>
              </DrawerContent>
            </Drawer>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
