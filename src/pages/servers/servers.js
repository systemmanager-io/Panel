import * as React from 'react';

export default class Servers extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-white text-2xl m-1">Servers</h2>
                <hr/>
                <div className="flex w-full flex-wrap">
                    <div className="w-full">
                        {/*                    <TableHead style={{maxWidth: "10px"}}></TableHead>*/}
                        {/*                    <TableHead>Name</TableHead>*/}
                        {/*                    <TableHead>IP/FQDN</TableHead>*/}
                        {/*                    <TableHead className="hidden">Description</TableHead>*/}
                        {/*                    <TableHead className="hidden">System Message</TableHead>*/}
                        {/*                    <TableHead>Cluster</TableHead>*/}
                    </div>
                </div>
            </div>
        );
    }
}

