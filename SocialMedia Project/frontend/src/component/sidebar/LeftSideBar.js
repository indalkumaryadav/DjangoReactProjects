import React, { useEffect } from 'react';
import { LeftDiv } from './style';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Container, IconButton, Typography, Divider } from '@material-ui/core';
import User from '../user/User';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { getUserFollowing } from '../../redux/actions/followingAction';
import { useHistory } from 'react-router-dom';

const LeftSideBar = ({ setOpenMenu }) => {
  const dispatch = useDispatch();
  const userPost = useSelector((state) => state.post.post);
  const user = useSelector((state) => state.user.profile);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserFollowing());
  }, []);
  return (
    <>
      <LeftDiv>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              onClick={() => {
                history.push('/');
              }}
            >
              <InstagramIcon />
            </IconButton>
            <Typography
              style={{
                fontFamily: 'cursive',
              }}
            >
              Instagram
            </Typography>
          </div>
        </Container>
        {/* user */}
        <User
          bio={user?.bio}
          follower={user?.follower?.length}
          following={user?.following?.length}
          email={user?.email}
          image={user?.profile?.user_image}
          post={userPost?.current_user_post?.length}
        />
        {/* sidebar option */}
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <SideBarOption
            Icon={HomeIcon}
            title="Home"
            onClick={() => {
              history.push('/');
            }}
          />
          <SideBarOption
            Icon={SettingsIcon}
            title="Settings"
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>
        <Divider />

        <SideBarOption
          Icon={ExitToAppIcon}
          title="Logout"
          onClick={() => {
            dispatch(logout());
          }}
        />
      </LeftDiv>
    </>
  );
};

export default LeftSideBar;
