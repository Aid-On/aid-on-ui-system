import React from 'react';
import { Box, VStack, HStack, Heading, Text } from '@chakra-ui/react';

export const AidOnWebsiteTemplate: React.FC = () => {
  return (
    <Box minHeight="100vh" bg="gray.100">
      <VStack spacing={4} align="stretch">
        {/* Header */}
        <Box bg="blue.500" p={4} color="white">
          <Heading size="lg">AidOnWebsite</Heading>
        </Box>

        {/* Main Content */}
        <HStack align="flex-start" spacing={4} p={4}>
          {/* Sidebar */}
          <Box width="250px" bg="white" p={4} borderRadius="md" boxShadow="md">
            <VStack align="stretch" spacing={2}>
              <Text fontWeight="bold">Navigation</Text>
              <Text>Menu Item 1</Text>
              <Text>Menu Item 2</Text>
              <Text>Menu Item 3</Text>
            </VStack>
          </Box>

          {/* Content Area */}
          <Box flex={1} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={4}>Welcome to AidOnWebsite</Heading>
            <Text>This is the main content area. You can add your specific content here.</Text>
          </Box>
        </HStack>

        {/* Footer */}
        <Box bg="gray.200" p={4} mt="auto">
          <Text textAlign="center">&copy; 2024 AidOnWebsite. All rights reserved.</Text>
        </Box>
      </VStack>
    </Box>
  );
};