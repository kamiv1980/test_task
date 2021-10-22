import { memo } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './styles.module.css';

export const ListProducts = memo(({ list }) => {
  return (
    <div className={styles.wrapper}>
      {!!list.length ? (
        list.map((item) => (
          <Card className={styles.card} key={item.id}>
            <CardMedia component="img" height="320" image={item.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.price} $
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link className={styles.link} to={{ pathname: `/products/${item.id}` }}>
                  More details
                </Link>
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
});
