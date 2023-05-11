import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { capitalizeFirstLetter, formatNumber } from '../../utils';
import Picture from '../common/Picture';
import createTableRows from '../../utils/pokeDetails/createTableRows';
import styles from './PokeDetails.module.css';

const RootTable = styled('div')(
  () => `
  table {
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
    border-color: #c2c2c2;
  }

  td,
  th {
    border: 1px solid #c2c2c2;
    text-align: center;
    padding: 8px;
  }

  th {
    background-color: white;
  }
  `
);

const PokeDetails = ({ selected }) => {
  if (!selected) return null;

  const { id, name, sprites } = selected;
  const { detailsWrapper, valueColumn } = styles;

  const rows = createTableRows(selected);

  return (
    <div className={detailsWrapper}>
      <Card>
        <CardContent>
          <Picture
            src={sprites?.other?.['official-artwork']?.front_default}
            alt={name}
            height={400}
          />
          <Typography align="center" variant="h6" mb={3}>
            {capitalizeFirstLetter(name)} #{formatNumber(id)}
          </Typography>
          <RootTable sx={{ maxWidth: '100%' }}>
            <table>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.key}>
                    <td>{row.key}</td>
                    <td className={valueColumn}>{row.render()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </RootTable>
        </CardContent>
      </Card>
    </div>
  );
};

export default PokeDetails;
