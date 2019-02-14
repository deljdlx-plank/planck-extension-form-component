<?php

namespace Planck\Extension;


use Planck\Application\Application;
use Planck\Application\Extension;

class FormComponent extends Extension
{


    public function __construct(Application $application)
    {

        parent::__construct($application);
        $this->addFrontPackage(
            new \Planck\Extension\FrontVendor\Package\Quill()
        );

    }


}
