import React, { useContext } from 'react';
import { Stack, Heading, HStack, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { contexts, types } from '@store/index';

const { ModalContext } = contexts;
const { ActionType } = types;

const Header = () => {
  const { dispatch, state } = useContext(ModalContext);
  const { visible } = state;

  const toggleModal = () => {
    dispatch({ type: ActionType.TOGGLE_MODAL, payload: { visible: !visible } });
  };

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      bg='#202C33'
      w='100%'
      h='50'
      px='2'
    >
      <Heading size='md' color='#888D90'>
        WhatsApp
      </Heading>

      <HStack alignItems='center'>
        <IconButton size='sm' icon={<Icon name='search' color='#888D90' size={25} />} />

        <IconButton
          size='sm'
          onPress={toggleModal}
          icon={<Icon name='more-vert' color='#888D90' size={25} />}
        />
      </HStack>
    </Stack>
  );
};

export default Header;
