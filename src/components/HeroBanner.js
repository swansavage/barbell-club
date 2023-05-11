import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/pic.png';

const HeroBanner = () => {
	return (
		<Box
			sx={{
				mt: { lg: '212px', xs: '70px' },
				ml: { sm: '50px' },
			}}
			position="relative"
			p="20px"
		>
			<Box display="flex" justifyContent="center">
				<Box>
					<Typography color="#ff2625" fontWeight="600" fontSize="26px">
						Find your routine
					</Typography>
					<Typography
						fontWeight={700}
						sx={{
							fontSize: { lg: '44px', xs: '40px' },
						}}
					>
						Sweat, smile, and repeat
					</Typography>
					<Typography fontSize="22px" lineHeight="35px" mb={3}>
						Check out the most effective exercises
					</Typography>
					<Button
						variant="contained"
						href="#exercises"
						color="error"
						sx={{
							backgroundColor: '#ff2625',
							padding: '10px',
							textTransform: 'none',
						}}
					>
						Explore Exercises
					</Button>
				</Box>

				<img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
			</Box>
		</Box>
	);
};

export default HeroBanner;
