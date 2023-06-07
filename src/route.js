const apiVersion = "v1";
const apiName = "v1";
const apiRouteMain = "v1";


const create = router.post('/', (req, res, next)=>{
    res.status(200).send(req.body);
});

const del = router.put('/', (req, res, next)=>{
    res.status(200).send(req.body);
});

const put = router.post('/', (req, res, next)=>{
    res.status(200).send(req.body);
});

