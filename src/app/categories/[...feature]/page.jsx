
const page = ({params}) => {
    console.log(params.feature)
    if(params?.feature?.length == 4){
        return <div>Ami 0 Number index er value {params.feature[3]}</div>
    }
    if(params?.feature?.length == 3){
        return <div>Ami 0 Number index er value {params.feature[2]}</div>
    }
    if(params?.feature?.length == 2){
        return <div>Ami 0 Number index er value {params.feature[1]}</div>
    }
    if(params?.feature?.length == 1){
        return <div>Ami 0 Number index er value {params.feature[0]}</div>
    }
    return (
        <div>
            This is a Category details page
        </div>
    );
};

export default page;