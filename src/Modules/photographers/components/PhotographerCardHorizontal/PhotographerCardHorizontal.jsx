import React, { useState } from 'react';
import {
  makeStyles, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TagsCloud from 'Modules/tags';

import ContactForm from 'Modules/form';
import PhotographerAvatar from '../PhotographerAvatar';
import PhotographerInfo from '../PhotographerInfo';
import photographerPropTypes from '../../prop-types/photographerPropTypes';

const propTypes = {
  photographer: photographerPropTypes.isRequired,
};

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  card: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    padding: spacing(2),
    [breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: spacing(2),
      padding: spacing(6, 7),
    },
  },
  infos: {
    '& h1': {
      color: palette.text.tertiary,
    },
  },
  tagsCloud: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  contactCTAContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    zIndex: 100,
    justifySelf: 'center',
    [breakpoints.up('md')]: {
      position: 'relative',
      display: 'block',
    },
  },
  contactCTA: {
    margin: spacing(0, 'auto', 4, 'auto'),
    textTransform: 'none',
    fontWeight: 'bold',
    [breakpoints.up('md')]: {
      margin: 0,
      padding: '22px 11px',
    },
  },
  avatarContainer: {
    justifySelf: 'end',
  },
}));

const PhotographerCardHorizontal = ({
  photographer,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const {
    name, city, country, tags, tagline, price, portrait,
  } = photographer;

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.infos}>
          <Typography
            variant="h2"
            component="h1"
          >
            { name }
          </Typography>
          <PhotographerInfo
            city={city}
            price={price}
            country={country}
            tagline={tagline}
            name={name}
            variant="horizontal"
          />
          <div className={classes.tagsCloud}>
            <TagsCloud tags={tags} />
          </div>
        </div>
        <div className={classes.contactCTAContainer}>
          <Button
            className={classes.contactCTA}
            variant="contained"
            color="primary"
            onClick={handleOpenContactForm}
            disableElevation
          >
            Contactez-moi
          </Button>
        </div>
        <div className={classes.avatarContainer}>
          <PhotographerAvatar
            filename={portrait}
            width={isSmallScreen ? 100 : 200}
          />
        </div>
      </div>
      <ContactForm
        title={`Contactez-moi ${photographer.name}`}
        isOpen={isContactFormOpen}
        handleClose={handleCloseContactForm}
      />
    </>
  );
};

PhotographerCardHorizontal.propTypes = propTypes;

export default PhotographerCardHorizontal;
