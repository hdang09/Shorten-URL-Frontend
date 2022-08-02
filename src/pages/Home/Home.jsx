import { Card, Input } from '../../components';

function Home() {
    return (
        <>
            <div className="row">
                <div className="col col-lg-8 col-md-12">
                    <Card title="URL Shortener">
                        <Input large transparent placeholder="Paste a link to shorten it" />
                    </Card>
                    <Card title="My Links"></Card>
                </div>
                <div className="col col-lg-4 col-sm-12">
                    <Card title="Statistics"></Card>
                    <Card title="Analytics"></Card>
                </div>
            </div>
        </>
    );
}

export default Home;
