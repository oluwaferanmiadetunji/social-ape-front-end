import React from "react";
import NoImg from "../images/no-img.png";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

//MUI
import Paper from '@material-ui/core/Paper'

//Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = (theme) => ({
  ...theme.classes,
  handle: {
    height: 20,
    backgroundColor: theme.palette.primary.light,
    width: 60,
    margin: "0 auto 7px auto",
  },
  fullLine: {
    height: 15,
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    marginBottom: 10,
  },
  halfLine: {
    height: 15,
    backgroundColor: theme.palette.primary.light,
    width: "50%",
    marginBottom: 10,
  },
});


const ProfileSkeleton = (props) => {
  const { classes } = props;
  return (
    <Paper>
      <div className={classes.profile}>
        <div className='image-wrapper'>
          <img src={NoImg} alt="" className='profile-image' />
        </div>
        <hr />
        <div className='profile-details'>
          <div className={classes.handle} />
          <hr />
          <div className={classes.fullLine} />
          <div className={classes.fullLine} />
          <hr />
          <LocationOn color="primary" /> <hr />
          <LinkIcon color="primary" />
          <hr />
          <CalendarToday color="primary" /><br />
        </div>
      </div>
    </Paper>
  );
}

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSkeleton);
