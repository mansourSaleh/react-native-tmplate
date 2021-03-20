import React, {useContext} from 'react';
import {View, Button, I18nManager, DevSettings} from 'react-native';
import {Div, Text} from 'react-native-magnus';
import {DataContext} from '../../Context';
import {useTranslation} from 'react-i18next';

const index = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const {test} = useContext(DataContext);

  return (
    <Div flex={1}>
      <Div
        flex={1}
        row
        justifyContent="space-around"
        alignItems="center"
        bg="gray300">
        <Text fontSize="4xl">{t('hello_word')}</Text>
        <Text fontSize="4xl" color="gray600">
          Row 2
        </Text>
        <Text fontSize="4xl" color="gray600">
          Row 3
        </Text>
      </Div>
      <Button
        title="Change lang"
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
            I18nManager.forceRTL(i18n.language === 'ar');
            DevSettings.reload();
          });
        }}
      />
    </Div>
  );
};

export default index;
