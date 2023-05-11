import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchSharp } from '@mui/icons-material';

const SearchExercises = () => {
	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography
				fontWeight={700}
				sx={{
					fontSize: { lg: '44px', xs: '30px' },
				}}
				mb="50px"
				textAlign="center"
			>
				Awesome Exercises You <br /> Should Know
			</Typography>
			<Box
				postion="relative"
				mb="72px"
				sx={{
					width: { lg: '1120px', xs: '300px' },
				}}
			>
				<Stack direction="row" width="100%">
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchSharp />
								</InputAdornment>
							),
						}}
						sx={{
							fieldset: {
								border: 'none',
							},
							input: {
								fontWeight: '700',
								border: 'none',
								borderRadius: '4px',
								outline: 'none',
							},
							width: '90%',
							backgroundColor: '#fff',
							borderRadius: '40px',
							border: 'none',
							outline: 'none',
						}}
						height="76px"
						value=""
						onChange={(e) => {}}
						placeholder="Search Exercises"
						type="text"
					/>
					<Button
						className="search-btn"
						sx={{
							bgcolor: '#ff2625',
							color: '#fff',
							textTransform: 'none',
							width: { lg: '170px', xs: '100px' },
							fontSize: { lg: '20px', xs: '14px' },
							height: '56px',
						}}
					>
						Search
					</Button>
				</Stack>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
