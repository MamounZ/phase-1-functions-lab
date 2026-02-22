function distanceFromHqInBlocks(num)
{
	let dist = num - 42;
	return	Math.abs(dist);
}

function distanceFromHqInFeet(num)
{
	let distInBlock = distanceFromHqInBlocks(num)
	return	distInBlock * 264;
}

function distanceTravelledInFeet(start, destination)
{
	let blockCount = destination - start;
	return ((Math.abs(blockCount)) * 264);
}
function calculatesFarePrice(start, destination)
{
	let feetTraveled = distanceTravelledInFeet(start, destination);
	if (feetTraveled <= 400)
		return 0;
	else if (feetTraveled > 400 && feetTraveled <= 2000)
		return (0.02 * (feetTraveled - 400));
	else if (feetTraveled > 2500)
		return "cannot travel that far";
	else
		return (25);
}
