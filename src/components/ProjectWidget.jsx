// portfolio\src\components\ProjectWidget.jsx

import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, Typography, Chip, CardMedia } from '@mui/material';

const ProjectCard = styled(Card)({
  maxWidth: 300,
  margin: 'auto',
  marginBottom: 20,
  cursor: 'pointer',
});

const ChipWrapper = styled('div')({
  marginRight: 5,
  marginBottom: 5,
});

const ProjectWidget = ({ project }) => {
  const handleClick = () => {
    window.open(project.source_code_link, '_blank');
  };

  return (
    <ProjectCard onClick={handleClick}>
      <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
      <CardContent>
        <Typography variant="h6" component="div">
          {project.name}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.name}
        />
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <div className='project-tags'>
          {project.tags.map((tag, index) => (
            <ChipWrapper key={index}>
              <Chip label={tag.name} color="primary"/>
            </ChipWrapper>
          ))}
        </div>
      </CardContent>
      </a>
    </ProjectCard>
  );
};

export default ProjectWidget;
