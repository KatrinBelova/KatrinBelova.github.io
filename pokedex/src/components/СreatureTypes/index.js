import { Chip } from '@mui/material';
import styles from './СreatureTypes.module.css';
import { styled } from '@mui/system';

const typeToColor = {
  fire: '#f25e77',
  poison: '#e29ee6',
  grass: '#86db97',
  flying: 'antiquewhite',
  water: 'lightblue',
  bug: 'aquamarine',
  electric: 'yellow',
  ground: '#d1b199',
  fairy: '#f0b6c8',
};

const CustomChip = styled(Chip)(({ _, typename }) => ({
  backgroundColor: typeToColor[typename] || 'yellow',
}));

const СreatureTypes = ({ types }) => {
  const { typesWrapper, chip } = styles;

  return (
    <div className={typesWrapper}>
      {types?.length > 0 &&
        types.map((type, idx) => {
          const typeName = type?.type?.name;

          return (
            <CustomChip
              className={chip}
              typename={typeName}
              size="small"
              key={idx}
              label={typeName}
            />
          );
        })}
    </div>
  );
};

export default СreatureTypes;
