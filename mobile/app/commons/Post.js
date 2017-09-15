import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Thumbnail } from './index';

const Post = ({ image, author, message }) => {

  return (
    <Card>
        <CardSection>
            <Thumbnail image={image} />
            <Text>{author}</Text>
            <Text>Created By</Text>
        </CardSection>
        <CardSection>
            <Text>{message}</Text>
        </CardSection>
    </Card>
  );
};

export { Post };