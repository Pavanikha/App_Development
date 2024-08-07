// src/pages/AdminProfile.js
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PageContainer, 
  SidebarContainer, 
  SidebarLink, 
  ContentContainer, 
  Box, 
  ProfileSection, 
  ProfileItem 
} from '../Admin/styles.js';

const Adminprofile = () => (
  <PageContainer>
    <SidebarContainer>
      <SidebarLink to="/admin">Dashboard</SidebarLink>
      <SidebarLink to="/users">Users</SidebarLink>
      <SidebarLink to="/courses">Courses</SidebarLink>
      <SidebarLink to="/as">Assignment</SidebarLink>
      <SidebarLink to="/analytics">Analytics</SidebarLink>
      <SidebarLink to="/settings">Settings</SidebarLink>
      <SidebarLink to="/adminlogin">Logout</SidebarLink>
      
    </SidebarContainer>
    
    <ContentContainer>
      <Box>
        <ProfileSection>
          <h2>Personal Information</h2>
          <ProfileItem><strong>Name:</strong> KAVYA</ProfileItem>
          <ProfileItem><strong>Email:</strong> admin@scholar.com</ProfileItem>
          <ProfileItem><strong>Phone:</strong> +91 9003911272</ProfileItem>
        </ProfileSection>
      </Box>

      <Box>
        <ProfileSection>
          <h2>Account Settings</h2>
          <ProfileItem>
            <button style={{backgroundColor: "#45a049"}}>Change Password</button>
          </ProfileItem>
          <ProfileItem>
            <button style={{backgroundColor: "#45a049"}}>Enable Two-Factor Authentication</button>
          </ProfileItem>
        </ProfileSection>
      </Box>

      <Box>
        <ProfileSection>
          <h2>Notification Settings</h2>
          <ProfileItem>
            <label>
              <input type="checkbox" /> Email Notifications
            </label>
          </ProfileItem>
          <ProfileItem>
            <label>
              <input type="checkbox" /> In-app Notifications
            </label>
          </ProfileItem>
        </ProfileSection>
      </Box>

      <Box>
        <ProfileSection>
          <h2>Activity Overview</h2>
          <ProfileItem>Recent Activity 1</ProfileItem>
          <ProfileItem>Recent Activity 2</ProfileItem>
        </ProfileSection>
      </Box>

      
    </ContentContainer>
  </PageContainer>
);

export default Adminprofile;
